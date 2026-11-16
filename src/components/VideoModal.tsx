"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Check, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/siteConfig";

interface VideoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProjectForInquiry?: (projectTitle: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  project,
  onClose,
  onSelectProjectForInquiry,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // Reset states when project changes
  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
    setHasError(false);
  }, [project]);

  if (!project) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      if (total > 0) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      videoRef.current.currentTime = pct * videoRef.current.duration;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleInquire = () => {
    onClose();
    if (onSelectProjectForInquiry) {
      onSelectProjectForInquiry(project.title);
    }
    const contactElem = document.querySelector("#contact");
    if (contactElem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactElem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#101115] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B0C0E] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-[9px] uppercase tracking-[0.25em] font-semibold text-[#C5A880] border border-[#C5A880]/40 bg-[#C5A880]/10">
              {project.badge}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#A39D90] font-light">
              Cinematic Reel
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#A39D90] hover:text-[#F7F5F0] hover:bg-white/[0.05] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Theater */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center group overflow-hidden">
          {!hasError ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.thumbnail}
              autoPlay
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onError={() => setHasError(true)}
              className="w-full h-full object-contain cursor-pointer"
              onClick={togglePlay}
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center">
                <p className="text-sm text-[#F7F5F0] mb-2 font-serif text-lg">
                  Media Preview Standby
                </p>
                <p className="text-xs text-[#A39D90] max-w-md">
                  Drop your custom property MP4 into <code className="text-[#C5A880]">/public/videos/</code> and update <code className="text-[#C5A880]">src/data/siteConfig.ts</code>.
                </p>
              </div>
            </div>
          )}

          {/* Center Play/Pause Indicator on click */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className={`absolute z-10 w-16 h-16 rounded-full bg-[#0B0C0E]/70 border border-[#C5A880]/50 backdrop-blur-sm flex items-center justify-center text-[#F7F5F0] transition-opacity duration-300 ${
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-[#C5A880]" />
            ) : (
              <Play className="w-6 h-6 text-[#C5A880] fill-[#C5A880] ml-0.5" />
            )}
          </button>

          {/* Bottom Custom Video Controls */}
          {!hasError && (
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Progress Scrubber */}
              <div
                className="w-full h-1.5 bg-white/20 hover:h-2 transition-all cursor-pointer relative mb-3 rounded-none overflow-hidden"
                onClick={handleSeek}
              >
                <div
                  className="h-full bg-[#C5A880] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#ECE7DE]">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="hover:text-[#C5A880] transition-colors focus:outline-none"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="hover:text-[#C5A880] transition-colors focus:outline-none"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="font-mono text-[11px] text-[#A39D90]">
                    {formatTime(currentTime)} / {formatTime(duration || 45)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#C5A880] border border-[#C5A880]/30 px-2 py-0.5">
                    {project.aspectRatio}
                  </span>
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    className="hover:text-[#C5A880] transition-colors focus:outline-none"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Details Footer in Modal */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-[#0E1013] border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880]">
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>
              <h3 id="video-modal-title" className="font-serif text-2xl sm:text-3xl text-[#F7F5F0]">
                {project.title}
              </h3>
              <p className="text-sm text-[#A39D90] font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick CTA */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[220px]">
              <button
                type="button"
                onClick={handleInquire}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-[#0B0C0E] bg-[#C5A880] hover:bg-[#D6BD96] transition-colors"
              >
                <span>Discuss Similar Edit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#787368] text-center md:text-left">
                Remote Post-Production
              </div>
            </div>
          </div>

          {/* Highlights / Grading Notes */}
          <div className="mt-6 pt-6 border-t border-white/[0.06]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D8D1C3] mb-3 font-medium flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Editing & Post-Production Notes</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-[#A39D90] p-2.5 bg-white/[0.02] border border-white/[0.04]"
                >
                  <Check className="w-3.5 h-3.5 text-[#C5A880] mt-0.5 shrink-0" />
                  <span className="font-light">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

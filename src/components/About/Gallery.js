import React, { useRef, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Gallery({ items = [] }) {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children);
      const center = el.scrollLeft + el.clientWidth / 2;
      let idx = 0;
      let bestDist = Infinity;
      children.forEach((c, i) => {
        const cLeft = c.offsetLeft - el.offsetLeft;
        const cCenter = cLeft + c.getBoundingClientRect().width / 2;
        const dist = Math.abs(cCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          idx = i;
        }
      });
      setActiveIndex(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByCard = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el || !el.firstChild) return;
    const cardWidth = el.firstChild.getBoundingClientRect().width + 16;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const goToIndex = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i];
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft - 12, behavior: "smooth" });
  };

  const openModal = (i) => {
    setModalIndex(i);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevModal = () => setModalIndex((p) => (p - 1 + items.length) % items.length);
  const nextModal = () => setModalIndex((p) => (p + 1) % items.length);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prevModal();
      if (e.key === "ArrowRight") nextModal();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, items.length]);

  return (
    <>
      <div className="timeline-gallery">
        <button
          className="gallery-nav left"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
        >
          <FiChevronLeft size={22} aria-hidden="true" focusable="false" />
        </button>

        <div className="gallery-scroll" ref={scrollerRef}>
          {items.map((it, idx) => (
            <div
              className={`gallery-card ${idx === activeIndex ? "active" : ""}`}
              key={idx}
              onClick={() => openModal(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openModal(idx)}
            >
              <div className="gallery-media">
                <img src={it.src} alt={it.title} />
                <div className="gallery-year">{it.year}</div>
              </div>
              <div className="gallery-meta">
                <div className="gallery-title">{it.title}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="gallery-nav right"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
        >
          <FiChevronRight size={22} aria-hidden="true" focusable="false" />
        </button>

        <div className="gallery-dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activeIndex ? "active" : ""}`}
              aria-label={`Go to ${i + 1}`}
              onClick={() => goToIndex(i)}
            />
          ))}
        </div>
      </div>

      <Modal show={modalOpen} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{items[modalIndex]?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Button variant="light" onClick={prevModal} aria-label="Previous">
              <FiChevronLeft size={18} aria-hidden="true" focusable="false" />
            </Button>
            <img
              src={items[modalIndex]?.src}
              alt={items[modalIndex]?.title}
              style={{ maxWidth: "80%", maxHeight: "70vh", objectFit: "contain" }}
            />
            <Button variant="light" onClick={nextModal} aria-label="Next">
              <FiChevronRight size={18} aria-hidden="true" focusable="false" />
            </Button>
          </div>
          <div style={{ marginTop: 12, color: "var(--muted)" }}>
            <strong>{items[modalIndex]?.year}</strong> - {items[modalIndex]?.title}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Gallery;
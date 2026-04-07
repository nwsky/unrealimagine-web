"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const init = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal");

      // 只把折叠线以下的元素标记为待动画，视口内的永远不隐藏
      els.forEach((el) => {
        el.classList.remove("will-reveal", "revealed");
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight * 0.95) {
          el.classList.add("will-reveal");
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("revealed"); // 保留 will-reveal，叠加 revealed 触发动画
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px 0px 0px" }
      );

      document.querySelectorAll(".will-reveal").forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    };

    // 等 DOM 稳定后初始化
    const t = setTimeout(init, 80);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}

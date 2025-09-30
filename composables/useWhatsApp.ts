export const useWhatsApp = () => {
  const openWhatsApp = (phone: string, text?: string) => {
    // Keep digits only (WhatsApp requires international format without '+')
    const digits = (phone || "").replace(/\D/g, "");
    const url =
      `https://wa.me/${digits}` +
      (text ? `?text=${encodeURIComponent(text)}` : "");

    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return { openWhatsApp };
};

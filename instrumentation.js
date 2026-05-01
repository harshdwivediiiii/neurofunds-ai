export async function register() {
  if (
    typeof process === "undefined" ||
    process.env.NEXT_RUNTIME !== "nodejs" ||
    typeof window !== "undefined"
  ) {
    return;
  }

  hideServerStorage("localStorage");
  hideServerStorage("sessionStorage");
}

function hideServerStorage(storageKey) {
  if (!(storageKey in globalThis)) {
    return;
  }

  try {
    Object.defineProperty(globalThis, storageKey, {
      value: undefined,
      configurable: true,
      writable: true,
    });
  } catch {
    const storage = globalThis[storageKey];

    if (!storage || typeof storage !== "object") {
      return;
    }

    if (typeof storage.getItem !== "function") storage.getItem = () => null;
    if (typeof storage.setItem !== "function") storage.setItem = () => {};
    if (typeof storage.removeItem !== "function") storage.removeItem = () => {};
  }
}

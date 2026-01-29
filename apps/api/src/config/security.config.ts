export const SecurityConfig = {
  headers: {
    contentSecurityPolicy: true,
    referrerPolicy: "strict-origin-when-cross-origin",
  },

  rateLimits: {
    global: {
      windowSeconds: 60,
      maxRequests: 300,
    },
    auth: {
      windowSeconds: 60,
      maxRequests: 20,
    },
    ai: {
      windowSeconds: 60,
      maxRequests: 30,
    },
  },

  audit: {
    enabled: true,
    redactFields: ["password", "token", "secret"],
  },

  encryption: {
    atRest: true,
    inTransit: true,
  },
};

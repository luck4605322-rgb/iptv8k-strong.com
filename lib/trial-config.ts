// Fixed free-trial line used by the in-browser player on /[lang]/free-trial.
// Values are inlined at build time (static export), so they are public by
// design: the stream URLs a browser plays always contain these credentials.
export const trialConfig = {
  server: (process.env.NEXT_PUBLIC_TRIAL_SERVER || "").replace(/\/$/, ""),
  username: process.env.NEXT_PUBLIC_TRIAL_USERNAME || "",
  password: process.env.NEXT_PUBLIC_TRIAL_PASSWORD || "",
}

export const isTrialConfigured = Boolean(trialConfig.server && trialConfig.username && trialConfig.password)

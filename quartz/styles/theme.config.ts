export type ThemeConfig = {
  typography: {
    header: string
    body: string
    code: string
  }
  colors: {
    lightMode: {
      light: string
      lightgray: string
      gray: string
      darkgray: string
      dark: string
      secondary: string
      tertiary: string
      highlight: string
      textHighlight: string
    }
    darkMode: {
      light: string
      lightgray: string
      gray: string
      darkgray: string
      dark: string
      secondary: string
      tertiary: string
      highlight: string
      textHighlight: string
    }
  }
}

export const newthTheme: ThemeConfig = {
  typography: {
    header: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    code: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
  },
  colors: {
    lightMode: {
      light: "#FAF4F2",
      lightgray: "#e5e5e5",
      gray: "#939293",
      darkgray: "#403e41",
      dark: "#221f22",
      secondary: "#696769",
      tertiary: "#939293",
      highlight: "rgba(34, 31, 34, 0.05)",
      textHighlight: "rgba(34, 31, 34, 0.15)",
    },
    darkMode: {
      light: "#282A3A",
      lightgray: "#161821",
      gray: "#939293",
      darkgray: "#EAF2F1",
      dark: "#EAF2F1",
      secondary: "#898D95",
      tertiary: "#535763",
      highlight: "rgba(253, 253, 246, 0.08)",
      textHighlight: "rgba(253, 253, 246, 0.15)",
    },
  },
}

export const styleTheme: ThemeConfig = {
  typography: {
    header: "Inter, sans-serif",
    body: "Inter, sans-serif",
    code: "JetBrains Mono, monospace",
  },
  colors: {
    lightMode: {
      light: "#ffffff",
      lightgray: "#f0f0f0",
      gray: "#787878",
      darkgray: "#303030",
      dark: "#1a1a1a",
      secondary: "#5c5c5c",
      tertiary: "#787878",
      highlight: "rgba(26, 26, 26, 0.05)",
      textHighlight: "rgba(26, 26, 26, 0.15)",
    },
    darkMode: {
      light: "#1a1a1a",
      lightgray: "#2a2a2a",
      gray: "#787878",
      darkgray: "#e0e0e0",
      dark: "#ffffff",
      secondary: "#a8a8a8",
      tertiary: "#666666",
      highlight: "rgba(255, 255, 255, 0.08)",
      textHighlight: "rgba(255, 255, 255, 0.15)",
    },
  },
}

import { LocalizationProvider, jaJP } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const DateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        jaJP.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      {children}
    </LocalizationProvider>
  );
};

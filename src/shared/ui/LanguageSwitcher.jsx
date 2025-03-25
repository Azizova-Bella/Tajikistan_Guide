import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
  OutlinedInput,
} from '@mui/material';
import { GB, RU, TJ } from 'country-flag-icons/react/3x2';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [lang, setLang] = React.useState(i18n.language || 'en');

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <FormControl
      size="small"
      variant="outlined"
      sx={{
        minWidth: 40,
        borderRadius: 2,
        backgroundColor: isDark ? '#000' : '#fff',
        '& .MuiOutlinedInput-root': {
          backgroundColor: isDark ? '#000' : '#fff',
          color: isDark ? '#fff' : '#000',
          '& fieldset': {
            borderColor: isDark ? '#fff' : '#ccc',
          },
          '&:hover fieldset': {
            borderColor: isDark ? '#aaa' : '#888',
          },
          '&.Mui-focused fieldset': {
            borderColor: isDark ? '#fff' : '#000',
          },
        },
      }}
    >
      <InputLabel
        id="lang-select-label"
        sx={{
          color: isDark ? '#fff' : '#000',
        }}
      >
        Language
      </InputLabel>

      <Select
        labelId="lang-select-label"
        value={lang}
        onChange={handleChange}
        input={
          <OutlinedInput
            label="Language"
            sx={{
              backgroundColor: isDark ? '#000' : '#fff',
              color: isDark ? '#fff' : '#000',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: isDark ? '#fff' : '#ccc',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: isDark ? '#aaa' : '#888',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: isDark ? '#fff' : '#000',
              },
            }}
          />
        }
        sx={{
          backgroundColor: isDark ? '#000' : '#fff',
          color: isDark ? '#fff' : '#000',
          '& .MuiSelect-icon': {
            color: isDark ? '#fff' : '#000',
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: isDark ? '#000' : '#fff',
              color: isDark ? '#fff' : '#000',
              borderRadius: 2,
              '& .MuiMenuItem-root': {
                color: isDark ? '#fff' : '#000',
              },
            },
          },
        }}
      >
        <MenuItem value="en" sx={{ color: isDark ? '#fff' : '#000', width: "20px" }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GB title="English" style={{ width: '24px' }} />
          </span>
        </MenuItem>
        <MenuItem value="ru" sx={{ color: isDark ? '#fff' : '#000' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RU title="Russian" style={{ width: '24px' }} />
          </span>
        </MenuItem>
        <MenuItem value="tj" sx={{ color: isDark ? '#fff' : '#000' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TJ title="Tajik" style={{ width: '24px' }} />
          </span>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
module.exports = {
    config: {
        theme: {
            extend: {
                fontFamily: {
                    sans: [
                        'Inter',
                        '-apple-system',
                        '"Helvetica Neue"',
                        'sans-serif',
                    ],
                },
                colors: {
                    gray: {
                        900: '#1F2933',
                        800: '#323F4B',
                        700: '#3E4C59',
                        600: '#52606D',
                        500: '#616E7C',
                        400: '#7B8794',
                        300: '#9AA5B1',
                        200: '#CBD2D9',
                        100: '#E4E7EB',
                        50: '#F5F7FA',
                    },
                    primary: {
                        900: '#841003',
                        800: '#AD1D07',
                        700: '#C52707',
                        600: '#DE3A11',
                        500: '#F35627',
                        400: '#F9703E',
                        300: '#FF9466',
                        200: '#FFB088',
                        100: '#FFD0B5',
                        50: '#FFE8D9',
                    },
                    danger: {
                        900: '#610404',
                        800: '#780A0A',
                        700: '#911111',
                        600: '#A61B1B',
                        500: '#BA2525',
                        400: '#D64545',
                        300: '#E66A6A',
                        200: '#F29B9B',
                        100: '#FACDCD',
                        50: '#FFEEEE',
                    },
                    warning: {
                        900: '#513C06',
                        800: '#7C5E10',
                        700: '#A27C1A',
                        600: '#C99A2E',
                        500: '#E9B949',
                        400: '#F7D070',
                        300: '#F9DA8B',
                        200: '#F8E3A3',
                        100: '#FCEFC7',
                        50: '#FFFAEB',
                    },
                    success: {
                        900: '#19216C',
                        800: '#2D3A8C',
                        700: '#35469C',
                        600: '#4055A8',
                        500: '#4C63B6',
                        400: '#647ACB',
                        300: '#7B93DB',
                        200: '#98AEEB',
                        100: '#BED0F7',
                        50: '#E0E8F9',
                    },
                },
                width: {
                    "1/24": "4.16666%",
                    "72": "18rem",
                }
            },
        },
    },
    handler: function({ addUtilities, addComponents, theme }) {

        addUtilities(
            {
                '.transition-fast': {
                    transition: 'all .3s ease',
                },
                '.translate-r-2px': {
                    transform: 'translateX(2px)',
                },
            },
            { variants: ['hover'] }
        );

        let buttonOptions = {
            borderRadius: '.25rem',
            fontWeight: '600',
            lineHeight: '1.25',
            fontSize: '1rem',
            padding: '.5rem 1rem',
        };

        addComponents([
            {
                '.btn': {
                    display: 'inline-block',
                    padding: buttonOptions.padding,
                    fontSize: buttonOptions.fontSize,
                    fontWeight: buttonOptions.fontWeight,
                    lineHeight: buttonOptions.lineHeight,
                    borderRadius: buttonOptions.borderRadius,
                    borderWidth: '1px',
                    textDecoration: 'none',
                },
                '.btn-default': {
                    backgroundColor: theme('colors.white'),
                    borderColor: theme('colors.white'),
                    color: theme('colors.gray.900'),
                    '&:hover': {
                        boxShadow: theme('boxShadow.lg'),
                    }
                },
                '.btn-primary': {
                    backgroundColor: theme('colors.primary.500'),
                    borderColor: theme('colors.primary.500'),
                    color: theme('colors.white'),
                    '&:hover': {
                        backgroundColor: theme('colors.primary.600'),
                        borderColor: theme('colors.primary.600'),
                        boxShadow: theme('boxShadow.lg'),
                    }
                },
                '.btn-outline-primary': {
                    color: theme('colors.primary.500'),
                    borderColor: theme('colors.primary.500'),
                    '&:hover': {
                        boxShadow: theme('boxShadow.lg'),
                        color: theme('colors.primary.600'),
                        borderColor: theme('colors.primary.600'),
                    }
                },
                '.pill': {
                    padding: '0.25rem 0.75rem',
                    borderRadius: theme('borderRadius.full'),
                    fontWeight: theme('fontWeight.semibold'),
                    fontSize: theme('fontSize.xs'),
                },
                '.pill-danger': {
                    backgroundColor: theme('colors.danger.100'),
                    color: theme('colors.danger.900'),
                },
                '.pill-success': {
                    backgroundColor: theme('colors.success.100'),
                    color: theme('colors.success.900'),
                },
                '.pill-warning': {
                    backgroundColor: theme('colors.warning.100'),
                    color: theme('colors.warning.900'),
                },
                '.pill-gray': {
                    backgroundColor: theme('colors.gray.100'),
                    color: theme('colors.gray.900'),
                },
                '.card': {
                    backgroundColor: theme('colors.white'),
                    boxShadow: theme('boxShadow.lg'),
                    borderRadius: theme('borderRadius.default'),
                },
                '.sidebar-nav-link': {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.5rem 0.75rem',
                    color: theme('colors.gray.500'),
                    transition: 'all .3s ease',
                    '&.active': {
                        backgroundColor: theme('colors.white'),
                        color: theme('colors.gray.900'),
                        borderRadius: theme('borderRadius.default')
                    },
                    '&:not(.active)': {
                        '&:hover': {
                            color: theme('colors.gray.900'),
                            transform: 'translateX(2px)',
                        }
                    }
                },
                '.table': {
                    borderCollapse: 'collapse',
                    borderSpacing: '0',
                    '& th': {
                        fontWeight: theme('fontWeight.bold'),
                        fontSize: theme('fontSize.sm'),
                        color: theme('colors.gray.800'),
                        textTransform: 'uppercase',
                        borderBottomWidth: '1px',
                        borderColor: theme('colors.gray.200'),
                        padding: '0.75rem 1rem',
                        letterSpacing: theme('letterSpacing.wide'),
                        verticalAlign: 'middle',
                    },
                    '& td': {
                        fontWeight: theme('fontWeight.normal'),
                        color: theme('colors.gray.900'),
                        borderBottomWidth: '1px',
                        borderTopWidth: '1px',
                        borderColor: theme('colors.gray.100'),
                        padding: '1rem',
                        verticalAlign: 'middle',
                    }
                },
                '.table-link': {
                    '&:hover': {
                        color: theme('colors.primary.500')
                    }
                },
                '.form-label': {
                    fontWeight: theme('fontWeight.semibold'),
                    fontSize: theme('fontSize.sm'),
                    display: 'block',
                },
                '.dropdown-link': {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.5rem 1rem',
                    color: theme('colors.gray.800'),
                    fontSize: '1rem',
                    fontWeight: theme('fontWeight.normal'),
                    '&:hover': {
                        backgroundColor: theme('colors.gray.100'),
                    },
                },
            }
        ]);
    },
};

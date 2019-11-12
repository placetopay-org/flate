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
                        900: '#191A1A',
                        800: '#333334',
                        700: '#434445',
                        600: '#575759',
                        500: '#636469',
                        400: '#8C8D90',
                        300: '#B3B4B9',
                        200: '#D4D6DB',
                        100: '#ECEDF3',
                    },
                    primary: {
                        900: '#055324',
                        800: '#18672B',
                        700: '#298538',
                        600: '#3BA444',
                        500: '#4DBB4E',
                        400: '#6ED36A',
                        300: '#A2E69A',
                        200: '#CBF4C4',
                        100: '#F0FCED',
                    },
                    danger: {
                        900: '#862526',
                        800: '#B52828',
                        700: '#E52C2C',
                        600: '#FF3C3C',
                        500: '#FF6565',
                        400: '#FF8282',
                        300: '#FFB3B3',
                        200: '#FFD8D8',
                        100: '#FFF5F5',
                    },
                    warning: {
                        900: '#8E3116',
                        800: '#B44019',
                        700: '#DC5515',
                        600: '#FB6B0E',
                        500: '#FF8A2A',
                        400: '#FFAF4D',
                        300: '#FFD48A',
                        200: '#FFECC8',
                        100: '#FFFAF0',
                    },
                    success: {
                        900: '#114166',
                        800: '#005185',
                        700: '#006CB4',
                        600: '#0083D2',
                        500: '#009AE4',
                        400: '#00B4F0',
                        300: '#6CCEF6',
                        200: '#AEE4F9',
                        100: '#E6F8FF',
                    },
                    alert: {
                        900: '#433279',
                        800: '#563E98',
                        700: '#6F4ABE',
                        600: '#835FD1',
                        500: '#A37FE6',
                        400: '#BB97F0',
                        300: '#D9BEF7',
                        200: '#EBD9FA',
                        100: '#FAF4FD',
                    }
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
                    backgroundColor: theme('colors.primary.600'),
                    borderColor: theme('colors.primary.600'),
                    color: theme('colors.white'),
                    '&:hover': {
                        backgroundColor: theme('colors.primary.700'),
                        borderColor: theme('colors.primary.700'),
                        boxShadow: theme('boxShadow.lg'),
                    }
                },
                '.btn-outline-primary': {
                    color: theme('colors.primary.600'),
                    borderColor: theme('colors.primary.600'),
                    '&:hover': {
                        boxShadow: theme('boxShadow.lg'),
                        color: theme('colors.primary.700'),
                        borderColor: theme('colors.primary.700'),
                    }
                },
                '.pill': {
                    padding: '0.25rem 0.75rem',
                    borderRadius: theme('borderRadius.full'),
                    fontWeight: theme('fontWeight.semibold'),
                    fontSize: theme('fontSize.xs'),
                },
                '.pill-danger': {
                    backgroundColor: theme('colors.danger.200'),
                    color: theme('colors.danger.900'),
                },
                '.pill-success': {
                    backgroundColor: theme('colors.success.200'),
                    color: theme('colors.success.900'),
                },
                '.pill-warning': {
                    backgroundColor: theme('colors.warning.200'),
                    color: theme('colors.warning.900'),
                },
                '.pill-gray': {
                    backgroundColor: theme('colors.gray.200'),
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
                    color: theme('colors.gray.600'),
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
                        fontWeight: theme('fontWeight.light'),
                        color: theme('colors.gray.900'),
                        borderBottomWidth: '1px',
                        borderTopWidth: '1px',
                        borderColor: theme('colors.gray.100'),
                        padding: '1rem',
                        verticalAlign: 'middle',
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

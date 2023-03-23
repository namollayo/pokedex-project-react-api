import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
    
    colors: {
        primary: "#5E5E5E",
        second: "#FFFFFF",
        third: "#1A1A1A",
        none: 'transparent',
        button: {
            confirm:'#5CB85C',
            cancel:'#FF6262',
            blue:'#33A4F5',
        },

        pokemonCard: {        
            bug: { 500:"#4B9B31",
                   700:"#316520"
            },
            dark: { 500:"#7A6E87",
                    700:"#5c5365"
            },
            dragon: { 500:"#168cf3",
                      700:"#0A6CBF"
                    },
            electric: { 500:"#F7E078",
                        700:"#F4D23B"
            },
            fairy: { 500:"#F6CBF3",
                     700:"#EC8FE6"
            },
            fighting: { 500:"#DE7D99",
                        700:"#CE4069"
            },
            fire: { 500:"#FF7033",
                    700:"#F44900"
            },
            flying: { 500:"#94B2C7",
                      700:"#6892B0"
            },
            ghost: { 500:"#8393C3",
                     700:"#5269AC"
            },
            grass: { 500:"#9FD0A1",
                     700:"#70B873"
            },
            ground: { 500: "#E39B78",
                      700: "#d97745"
            },
            ice: { 500:"#A4DFD6",
                   700:"#74CEC0"
            },
            normal: { 500:"#ADADAD",
                      700:"#8A8A8A"
            },
            poison: { 500:"#C793C8",
                      700:"#AD61AE"
            },
            psychic: { 500:"#FAB2B5",
                       700:"#F67176"
            },
            rock: { 500:"#DED4BA",
                    700:"#C7B78B"
            },
            steel: { 500:"#E0E0E0",
                     700:"BBBBBB"
            },
            water: { 500:"#77C2F9",
                     700:"#33A4F5"
            }
        },

        stats: {
            yellow: '#FFDD58',
            
            orange: '#F77F11'
            }
        },

        textStyles: {

            pokemon: { 
                name: {
                    fontWeight: '700',
                    textTransform: 'capitalize',
                    fontSize:'32px',
                    lineHeight:'38.73px'
            },
                id: {
                    fontWeight: '700',
                    textTransform: 'capitalize',
                    fontSize:'16px',
                    lineHeight:'19.36px'
            }},

            default: {
                fontWeight: '700',
                textTransform: 'capitalize'
            },

            boxTitle: {
                fontWeight:'800',
                fontSize:'24px',
                lineHeight:'29px'
            }
        },

        components: {
            Progress : {
                variants: {
                    yellow: {
                        filledTrack:{
                            bg:  '#FFDD58',
                            border: `1px solid #e8c94f`
                        } 
                    },
                    orange: {
                        filledTrack: {
                        bg: '#F77F11',
                        border: `1px solid #EB770F`
                        }
                    },
                    green: {
                        filledTrack: {
                        bg: "#5CB85C",
                        border: `1px solid #5aa75a`
                        }
                    },
                }
            },

            Text: {
                variants: {
                    moves: { 
                        w:'fit-content',
                        p:'10px',
                        bg:'#ECECEC',
                        color: 'third',
                        border: '1px dashed rgba(0, 0, 0, 0.14)',
                        borderRadius: '0.75rem',
                        fontFamily: 'Montserrat',
                        fontWeight: '400',
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        mb:'1.25rem'
                    },              
             
                    modal: { 
                        bg:'second',
                        color: 'third',
                        fontFamily: `'Poppins', 'sans-serif'`,
                        fontWeight: '700',
                    }
                }
            },

}})
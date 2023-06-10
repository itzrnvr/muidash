export const navbarStyles = {
    toolbar: {
        paddingTop: 1,
        backgroundColor: '#000000',
    },
    toolbarTitle: {
        fontSize: 24,
        color: '#b287ed'
    },
    drawer: {
        width: 320,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            backgroundColor: '#000000',
            color: '#e0e2fa',
        },
        '& .Mui-selected': {
            backgroundColor: '#b287ed!important'
        },
    },
    icons: {
        color: '#e0e2fa!important',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};
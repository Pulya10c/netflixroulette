import { createUseStyles } from 'react-jss'

const getMarkColor = (theme: unknown) => {
    const mark = Number(theme)
    if (mark > 6) {
        return 'green'
    } else if (mark > 3) {
        return 'yellow'
    } else {
        return 'red'
    }
}

export const filmPreviewStyles = createUseStyles({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '16px 64px',
        color: 'white',
    },
    searchIcon: {
        fontSize: '45px',
        writingMode: 'vertical-lr',
        transform: 'rotate(45deg)',
        color: '#F65261',
        userSelect: 'none',
        cursor: 'pointer',
    },
    posterImage: {
        width: '200px',
        height: '300px',
    },
    filmInfo: {
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '0 36px',
    },
    filmTitle: {
        fontSize: '45px',
    },
    mark: ({ theme }) => ({
        display: 'inline-block',
        textAlign: 'center',
        padding: '16px 0',
        width: '77px',
        marginLeft: '8px',
        fontSize: '35px',
        border: '1px solid white',
        borderRadius: '50px',
        color: getMarkColor(theme),
    }),
    filmTime: {
        display: 'flex',
        gap: '16px',
        fontSize: '24px',
        color: '#F65261',
    },
})

import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import initStore from '../store';


function MyApp({ Component, pageProps, store, ...rest }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}


export default withRedux(initStore)(MyApp);
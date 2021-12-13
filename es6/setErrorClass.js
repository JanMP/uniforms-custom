import classnames from 'classnames';
const setErrorClass = (props) => {
    // @ts-ignore
    const showError = props.error != null;
    return classnames({
        'u-show-error': showError,
    });
};
export default setErrorClass;

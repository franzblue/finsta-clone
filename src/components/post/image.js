import ProptTypes from 'prop-types';

export default function Image({ src, caption }) {

    return (
        <img src={src} alt={caption} />
    )
}

Image.propTypes = {
    src: ProptTypes.string.isRequired,
    caption: ProptTypes.string.isRequired,
}
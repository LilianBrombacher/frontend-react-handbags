const Tile = ({ title, content, imageSrc, altText }) => {
    return (
        <section className="footer">
            <h2>{title}</h2>
            <p>{content}</p>
            <img src={imageSrc} alt={altText} />
        </section>
    );
};

export default Tile;
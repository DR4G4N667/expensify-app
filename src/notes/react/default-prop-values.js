// Recimo da hocemo da prosledimo neki default prop komponenti header.

class Parent extends React.Component {
    // Some code
    render() {
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
            </div>
        );
    }
}

const Header = () => {
    return (
        <div>
            {/* Some code */}
        </div>
    );
};


Header.defaultProps = {
    title: 'Some default title'
};
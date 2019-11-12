import React from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";

class App extends React.Component {
    render() {
        const { lists } = this.props;

        return (
            <div className="App">
                <h2>hello </h2>
                <div style={styles.listsContainer}>
                    {lists.map(list => (
                        <TrelloList
                            key={list.id}
                            title={list.title}
                            cards={list.cards}
                        />
                    ))}
                    <TrelloActionButton list />
                </div>
            </div>
        );
    }
}

const styles = {
    listsContainer: {
        display: "flex",
        flexDirection: "row"
    }
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);

import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const TrelloCard = ({ text }) => {
    return (
        <Card style={styles.cardContaienr}>
            <CardContent>
                <Typography gutterBottom>{text}</Typography>
            </CardContent>
        </Card>
    );
};

TrelloCard.propTypes = {
    text: PropTypes.string
};

const styles = {
    cardContaienr: {
        marginBottom: 8
    }
};

export default TrelloCard;

import React from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Textarea from "react-textarea-autosize";
import { Button } from "@material-ui/core";

const TrelloActionButton = ({ list }) => {
    const [formOpen, setFormOpen] = React.useState(false);
    const [text, setText] = React.useState(false);

    const renderAddButton = () => {
        let buttonText = "Add another card";
        let buttonTextOpacity = 0.5;
        let buttonTextColor = "inherit";
        let buttonTextBackground = "inherit";

        if (list) {
            buttonText = "Add another list";
            buttonTextOpacity = 1;
            buttonTextColor = "white";
            buttonTextBackground = "rgba(0,0,0,.15)";
        }

        return (
            <div
                onClick={handleButtonClick}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );
    };

    const handleButtonClick = () => setFormOpen(true);

    const closeForm = () => setFormOpen(false);

    const handleInputChange = e => {
        setText(e.target.value);
    };

    const renderForm = () => {
        let placeHolder = "Enter a title for this card";
        let buttonTitle = "Add Card";

        if (list) {
            placeHolder = "Enter list title...";
            buttonTitle = "Add List";
        }

        return (
            <div>
                <Card
                    style={{
                        minHeight: 85,
                        minWidth: 272,
                        padding: "6px 8px 2px"
                    }}
                >
                    <Textarea
                        placeholder={placeHolder}
                        onBlur={closeForm}
                        onChange={handleInputChange}
                        value={text}
                        autoFocus
                        style={{
                            resize: "none",
                            width: "100%",
                            outline: "none",
                            overflow: "hidden",
                            border: "none"
                        }}
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button
                        variant="contained"
                        style={{ color: "white", backgroundColor: "#5aac44" }}
                    >
                        {buttonTitle}{" "}
                    </Button>
                    <Icon style={{ marginLeft: 8, cursor: "pointer" }}>
                        close
                    </Icon>
                </div>
            </div>
        );
    };

    return formOpen ? renderForm() : renderAddButton();
};

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
};
export default TrelloActionButton;

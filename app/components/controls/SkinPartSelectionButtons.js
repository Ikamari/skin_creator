//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Actions
import * as skinActions from '../../actions/skinActions';
//Button
import ControlButton from "./ControlButton";

class SkinPartSelectionButtons extends Component {
    render() {
        const { selectSkinPart } = this.props.skinActions;
        const { selectedPart, isNewFormat, armorLayer } = this.props.skin;
        const needToDisable = (!isNewFormat && armorLayer);

        return(
            <div className = "skin-part-selection-buttons">
                <ControlButton
                    content = "Голова"
                    style = "skin-part-selection-button"
                    activeEvent = {selectedPart === "head"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {() => selectSkinPart("head")}
                />
                <ControlButton
                    content = "Торс"
                    style = {(needToDisable ? "control-button-disabled" : " ") + " skin-part-selection-button"}
                    activeEvent = {selectedPart === "body"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {!needToDisable ? () => selectSkinPart("body") : undefined}
                />
                <ControlButton
                    content = {isNewFormat ? "Л.Рука" : "-"}
                    style = {(!isNewFormat ? "control-button-disabled" : " ") + " skin-part-selection-button"}
                    activeEvent = {selectedPart === "left-hand"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {isNewFormat ? () => selectSkinPart("left-hand") : undefined}
                />
                <ControlButton
                    content = {isNewFormat ? "П.Рука" : "Руки"}
                    style = {(needToDisable ? "control-button-disabled" : " ") + " skin-part-selection-button"}
                    activeEvent = {selectedPart === "right-hand"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {!needToDisable ? () => selectSkinPart("right-hand") : undefined}
                />
                <ControlButton
                    content = {isNewFormat ? "Л.Нога" : "-"}
                    style = {(!isNewFormat ? "control-button-disabled" : " ") + " skin-part-selection-button"}
                    activeEvent = {selectedPart === "left-leg"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {isNewFormat ? () => selectSkinPart("left-leg") : undefined}
                />
                <ControlButton
                    content = {isNewFormat ? "П.Нога" : "Ноги"}
                    style = {(needToDisable ? "control-button-disabled" : " ") + " skin-part-selection-button"}
                    activeEvent = {selectedPart === "right-leg"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {!needToDisable ? () => selectSkinPart("right-leg") : undefined}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin
});

const mapDispatchToProps = (dispatch) => ({
    skinActions: bindActionCreators(skinActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SkinPartSelectionButtons)


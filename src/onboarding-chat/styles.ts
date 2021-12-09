import { Flex } from "@twilio-paste/flex";
import { CSSProperties } from "react";

export default {
	chatPage: {
		display: "block",
	},
	owlyMessageContainer: {
		display: "block",
		padding: "5px 5px",
	},
	owlyThinkingContainer: {
		display: "flex",
		padding: "5px 5px",
	},
	userMessageContainer: {
		display: "flex",
		justifyContent: "right",
		padding: "5px 5px",
	},
	bannerContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "40px",
	},
	textAreaContainerContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "10px",
	},
	owlyMessageBubble: {
		display: "block",
		width: "fit-content",
		justifyContent: "space-around",
		borderRadius: "10px",
		backgroundColor: "#ff2c45",
		color: "white",
		padding: "5px",
		boxShadow: "0px 0px 3px 0px grey",
	},
	userMessageBubble: {
		display: "block",
		width: "fit-content",
		justifyContent: "space-around",
		borderRadius: "10px",
		backgroundColor: "#4195D0",
		color: "black",
		padding: "5px",
		boxShadow: "0px 0px 3px 0px grey",
	},
	welcomeBannerText: {
		fontSize: "40px",
		padding: "12px",
	},
	welcomeBannerImage: {
		fontSize: "40px",
	},
	owlyName: {
		display: "flex",
		justifyItems: "left",
		borderBottom: "1.5px solid pink",
	},
	textAreaContainer: {
		display: "flex",
		justifyContent: "right",
		padding: "5px 5px",
		height: "60px",
		width: "600px",
	},
	userName: {
		display: "flex",
		justifyContent: "right",
		borderBottom: "1.5px solid #c0e4ff",
	},
	userMessageText: {
		display: "flex",
		justifyContent: "right",
	},
	chatContainer: {
		fontFamily: `[
			"Whitney SSm A",
			"Whitney SSm B",
			"Helvetica Neue",
			"Helvetica",
			"Arial",
			"sans-serif",
		]`,
		display: "block",
		justifyContent: "center",
		margin: "auto auto",
		boxShadow: "0px 0px 5px 0px grey",
		width: "600px",
		"overflow-y": "auto",
		height: "475px",
	},
};

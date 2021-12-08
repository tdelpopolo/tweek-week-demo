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
		margin: "5px",
	},
	owlyMessageBubble: {
		display: "block",
		width: "fit-content",
		justifyContent: "space-around",
		borderRadius: "10px",
		backgroundColor: "orange",
		color: "white",
		padding: "5px",
	},
	userMessageBubble: {
		display: "block",
		width: "fit-content",
		justifyContent: "space-around",
		borderRadius: "10px",
		backgroundColor: "grey",
		color: "white",
		padding: "5px",
	},
	welcomeBannerText: {
		fontSize: "40px",
	},
	welcomeBannerImage: {
		fontSize: "40px",
	},
	owlyName: {
		display: "flex",
		justifyItems: "left",
		borderBottom: "solid",
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
		borderBottom: "solid",
	},
	userMessageText: {
		display: "flex",
		justifyContent: "right",
	},
	chatContainer: {
		display: "block",
		justifyContent: "center",
		margin: "auto auto",
		boxShadow: "0px 0px 5px 0px grey",
		width: "600px",
		"overflow-y": "auto",
		height: "400px",
	},
};

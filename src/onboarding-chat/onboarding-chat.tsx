import React, { useState } from "react";
import { TextArea, Stack, Card, Heading, Paragraph } from "@twilio-paste/core";
import styles from "./styles";

const OnboardingChat = () => {
	const [count, setCount] = useState(0);

	const logEnter = (key: React.KeyboardEvent<HTMLTextAreaElement>): void => {
		if (key.key === "Enter") {
			setCount(count + 1);
		}
	};
	return (
		<Stack orientation="vertical" spacing="space60">
			<Card>
				<div style={styles.owlyMessage}>
					<div style={styles.owlyName}>
						<Heading as="h2" variant="heading20">
							Owly
						</Heading>
					</div>
					<Paragraph marginBottom="space0">
						Hey how are you doing?
					</Paragraph>
				</div>
			</Card>
			<Card>
				<div style={styles.userMessage}>
					<div style={styles.userName}>
						<Heading as="h2" variant="heading20">
							tdelpopolo@gmail.com
						</Heading>
					</div>
					<TextArea placeholder="" onKeyUp={logEnter}></TextArea>
				</div>
			</Card>
			{count > 0 && (
				<Card>
					<div style={styles.owlyMessage}>
						<div style={styles.owlyName}>
							<Heading as="h2" variant="heading20">
								Owly
							</Heading>
						</div>
						<Paragraph marginBottom="space0">
							Oh I am doing great.
						</Paragraph>
					</div>
				</Card>
			)}
		</Stack>
	);
};

export default OnboardingChat;

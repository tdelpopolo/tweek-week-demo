import React, { useState } from "react";
import { TextArea, Stack, Card, Heading, Paragraph } from "@twilio-paste/core";
import styles from "./styles";

interface ChatMessage {
	user: string;
	message: string;
	clock: number;
}
const OnboardingChat = () => {
	const owlyResponses: Array<ChatMessage> = [
		{ user: "owly", message: "How are you doing?", clock: 0 },
		{ user: "owly", message: "What time is it?", clock: 1 },
		{ user: "owly", message: "What languages do you know?", clock: 2 },
		{ user: "owly", message: "Are you a pizza lover?", clock: 3 },
	];
	const [count, setCount] = useState(0);
	const [clock, setClock] = useState(0);

	const [customerResponses, setCustomerReponses] = useState<
		Array<ChatMessage>
	>([]);

	const logEnter = (key: React.KeyboardEvent<HTMLTextAreaElement>): void => {
		if (key.key === "Enter") {
			setCount(count + 1);
			setClock(clock + 1);

			setCustomerReponses([
				...customerResponses,
				{
					user: "customer",
					message: key.currentTarget.value,
					clock: clock,
				},
			]);
			console.log(customerResponses);
		}
	};

	const chats = [...owlyResponses, ...customerResponses];
	chats.sort((a, b) => {
		return a.clock - b.clock;
	});

	return (
		<Stack orientation="vertical" spacing="space60">
			{chats.map((m) => (
				<div>
					{m.user === "owly" && m.clock <= clock && (
						<Card>
							<div style={styles.owlyMessage}>
								<div style={styles.owlyName}>
									<Heading as="h2" variant="heading20">
										Owly
									</Heading>
								</div>
								<Paragraph marginBottom="space0">
									{m.message}
								</Paragraph>
							</div>
						</Card>
					)}

					{m.user === "customer" && (
						<Card>
							<div style={styles.userMessage}>
								<div style={styles.userName}>
									<Heading as="h2" variant="heading20">
										tdelpopolo@gmail.com
									</Heading>
								</div>
								<Paragraph marginBottom="space0">
									{m.message}
								</Paragraph>
							</div>
						</Card>
					)}
				</div>
			))}
			<Card>
				<div style={styles.userMessage}>
					<div style={styles.userName}>
						<Heading as="h2" variant="heading20">
							tdelpopolo@gmail.com
						</Heading>
					</div>
					<TextArea
						name="userInputArea"
						placeholder="Enter text"
						onKeyUp={logEnter}
					></TextArea>
				</div>
			</Card>
		</Stack>
	);
};

export default OnboardingChat;

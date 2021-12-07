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
	const [clock, setClock] = useState(0);

	const [customerResponses, setCustomerReponses] = useState<
		Array<ChatMessage>
	>([]);

	const logEnter = (key: React.KeyboardEvent<HTMLTextAreaElement>): void => {
		if (key.key === "Enter") {
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
		<div>
			<div style={styles.bannerContainer}>
				<h1 style={styles.welcomeBannerText}>Welcome to</h1>
				<img height="100px" src="twilio-logo-red.svg"></img>
			</div>
			<div style={styles.chatContainer}>
				<Stack orientation="vertical" spacing="space0">
					{chats.map((m) => (
						<div>
							{m.user === "owly" && m.clock <= clock && (
								<div style={styles.owlyMessageContainer}>
									<div style={styles.owlyMessageBubble}>
										<div style={styles.owlyName}>
											<Heading
												as="h2"
												variant="heading40"
											>
												Owly
											</Heading>
										</div>
										<Paragraph marginBottom="space0">
											{m.message}
										</Paragraph>
									</div>
								</div>
							)}

							{m.user === "customer" && (
								<div>
									<div style={styles.userMessageContainer}>
										<div style={styles.owlyMessageBubble}>
											<div style={styles.userName}>
												<Heading
													as="h2"
													variant="heading60"
												>
													tdelpopolo@gmail.com
												</Heading>
											</div>
											<div style={styles.userMessageText}>
												<Paragraph marginBottom="space0">
													{m.message}
												</Paragraph>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					))}
					<Card>
						<div style={styles.userMessageContainer}>
							<TextArea
								name="userInputArea"
								placeholder="Type your message"
								onKeyUp={logEnter}
								autoFocus
							></TextArea>
						</div>
					</Card>
				</Stack>
			</div>
		</div>
	);
};

export default OnboardingChat;

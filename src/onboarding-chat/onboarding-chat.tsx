import React, { useEffect, useRef, useState } from "react";
import { TextArea, Stack, Card, Heading, Paragraph } from "@twilio-paste/core";
import styles from "./styles";

interface ChatMessage {
	user: string;
	message: string;
	clock: number;
}

const OnboardingChat = () => {
	const messageEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const owlyResponses: Array<ChatMessage> = [
		{ user: "owly", message: "How are you doing?", clock: 0 },
		{ user: "owly", message: "What time is it?", clock: 1 },
		{ user: "owly", message: "What languages do you know?", clock: 2 },
		{ user: "owly", message: "Are you a pizza lover?", clock: 3 },
	];
	const [clock, setClock] = useState(0);

	const [thinking, setThinking] = useState(false);

	const [customerResponses, setCustomerReponses] = useState<
		Array<ChatMessage>
	>([]);

	const logEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
		if (e.key === "Enter") {
			e.preventDefault();
			setThinking(true);
			setTimeout(() => {
				setClock(clock + 1);
				scrollToBottom();
				setThinking(false);
			}, 1000 + 500 * Math.random());
			setCustomerReponses([
				...customerResponses,
				{
					user: "customer",
					message: e.currentTarget.value,
					clock: clock,
				},
			]);

			console.log(customerResponses);
			e.currentTarget.value = "";
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [thinking]);

	const chats = [...owlyResponses, ...customerResponses];
	chats.sort((a, b) => {
		return a.clock - b.clock;
	});
	if (clock === 4) {
		window.location.href = "/tw_dashboard/dashboard.html";
	}

	return (
		<div style={styles.chatPage}>
			<div style={styles.bannerContainer}>
				<h1 style={styles.welcomeBannerText}>Ahoy! Welcome to</h1>
				<img height="100px" src="twilio-logo-red.svg"></img>
			</div>
			<div style={styles.chatContainer}>
				<Stack orientation="vertical" spacing="space0">
					{chats.map((m) => (
						<div>
							{m.user === "owly" && m.clock <= clock && (
								<div style={styles.owlyMessageContainer}>
									<div style={styles.owlyMessageBubble}>
										<div style={styles.owlyName}>Owly</div>
										{m.message}
									</div>
								</div>
							)}

							{m.user === "customer" && (
								<div>
									<div style={styles.userMessageContainer}>
										<div style={styles.userMessageBubble}>
											<div style={styles.userName}>
												tdelpopolo@gmail.com
											</div>
											<div style={styles.userMessageText}>
												{m.message}
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					))}
					{thinking && (
						<div style={styles.owlyThinkingContainer}>
							<Paragraph marginBottom="space0">
								Owly is thinking
							</Paragraph>
						</div>
					)}
					<div ref={messageEndRef} />
				</Stack>
			</div>
			<div style={styles.textAreaContainerContainer}>
				<div style={styles.textAreaContainer}>
					<TextArea
						name="userInputArea"
						placeholder="Type your message"
						onKeyDown={logEnter}
						autoFocus
						disabled={thinking}
					></TextArea>
				</div>
			</div>
		</div>
	);
};

export default OnboardingChat;

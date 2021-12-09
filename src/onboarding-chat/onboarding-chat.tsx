import React, { useEffect, useRef, useState } from "react";
import { TextArea, Stack, Card, Heading, Paragraph } from "@twilio-paste/core";
import styles from "./styles";
import { render } from "@testing-library/react";

interface ChatMessage {
	user: string;
	message: string;
	clock: number;
	finished?: boolean;
}

const OnboardingChat = () => {
	const messageEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const owlyResponses: Array<ChatMessage> = [
		{
			user: "owly",
			message:
				"Hello I'm Owly here to help you with assisting you in selecting Twilio products that best suit your requirements",
			clock: 0,
		},
		{
			user: "owly",
			message:
				"So that I can better assist you do you mind sharing the kind of business you're in",
			clock: 0,
		},
		{
			user: "owly",
			message:
				"Great. Thanks for your response! Would you mind sharing what regions your organization operates in?",
			clock: 1,
		},
		{
			user: "owly",
			message:
				"Excellent! And would your team prefer to program a solution or go with our minimal/no-code offering?",
			clock: 2,
		},
		{
			user: "owly",
			message:
				"Thank you! What programming language(s) does your development team use",
			clock: 3,
		},
		{
			finished: true,
			user: "owly",
			message:
				"Thanks for your responses. Please give me a moment while I analyze your needs so that I can come up with an opimal set of products to suit your unique needs",
			clock: 4,
		},
		{
			user: "owly",
			message:
				"Got it! Taking you the the Twilio console personalized for you.",
			clock: 5,
		},
	];
	const [clock, setClock] = useState(0);

	const [thinking, setThinking] = useState(false);

	const [finished, setFinished] = useState(false);

	const [customerResponses, setCustomerReponses] = useState<
		Array<ChatMessage>
	>([]);

	const advance = (time: number) => {
		setThinking(true);
		setTimeout(() => {
			setClock(clock + 1);
			scrollToBottom();
			setThinking(false);
			console.log(time);
		}, time);
	};

	const logEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
		if (e.key === "Enter") {
			e.preventDefault();
			advance(1500);
			setCustomerReponses([
				...customerResponses,
				{
					user: "customer",
					message: e.currentTarget.value,
					clock: clock,
				},
			]);

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

	useEffect(() => {
		const finishStartMessage = owlyResponses.find((m) => {
			return m.finished;
		});
		const lastMessage = owlyResponses.slice(-1);

		if (clock === lastMessage[0].clock) {
			setThinking(false);
			setTimeout(() => {
				console.log("test");
				window.location.href = "/tw_dashboard/dashboard.html";
			}, 3000);
		} else if (
			finishStartMessage &&
			clock >= finishStartMessage?.clock &&
			clock <= lastMessage[0].clock
		) {
			setFinished(true);
			advance(3000);
		}
	}, [clock]);

	return (
		<div style={styles.chatPage}>
			<div style={styles.bannerContainer}>
				<h1 style={styles.welcomeBannerText}>Ahoy! Welcome to</h1>
				<img height="65px" src="twilio-logo-red.svg"></img>
			</div>
			<div style={styles.chatContainer}>
				<Stack orientation="vertical" spacing="space0">
					{chats.map((m) => (
						<div>
							{m.user === "owly" && m.clock <= clock && (
								<div style={styles.owlyMessageContainer}>
									<div style={styles.owlyMessageBubble}>
										<div style={styles.owlyName}>Owly</div>
										<div style={styles.owlyMessageText}>
											{m.message}
										</div>
									</div>
								</div>
							)}

							{m.user === "customer" && (
								<div>
									<div style={styles.userMessageContainer}>
										<div style={styles.userMessageBubble}>
											<div style={styles.userName}>
												Hakeem
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
						disabled={thinking || finished}
					></TextArea>
				</div>
			</div>
		</div>
	);
};

export default OnboardingChat;

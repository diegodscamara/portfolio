import React from 'react'
import styled from 'styled-components'

export const Container = React.memo(styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-grow: 1;
	background: var(--gray-900);
	isolation: isolate;
	border-radius: var(--spacing-s-100);
	box-shadow: var(--shadow-10);
	transition: transform 0.3s ease-in-out;
	position: relative;
	min-height: 580px;
	border: 1px solid var(--gray-800);

	&:hover {
		transform: translateY(-5px);
	}

	@media only screen and (max-width: 768px) {
		min-height: unset;
	}

	img {
		width: 100%;
		height: 100%;
		height: 250px;
		object-fit: cover;
		border-top-left-radius: var(--spacing-s-100);
		border-top-right-radius: var(--spacing-s-100);
		transition: transform var(--transition-03);
	}
`)

export const Tag = React.memo(styled.div`
	padding: var(--spacing-s-100) var(--spacing-s-300);
	border-radius: var(--spacing-s-100);
	background: var(--primary-color);
	position: absolute;
	top: var(--spacing-s-300);
	left: var(--spacing-s-300);
	box-shadow: var(--shadow-10);
	transition: var(--transition-03);
	color: #222222;
	font-size: var(--font-s-100);
	font-weight: var(--font-weight-bold);

	&:hover {
		opacity: 0.8;
	}
`)

export const Content = React.memo(styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: var(--spacing-m-400);
	gap: var(--spacing-m-400);
	height: max-content;
	flex-grow: 1;

	img {
		width: var(--spacing-s-300);
		height: var(--spacing-s-300);
	}
`)

export const Header = React.memo(styled.header`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: var(--spacing-s-300);
`)

export const Title = React.memo(styled.h4`
	color: var(--gray-50);
`)

export const Description = React.memo(styled.span`
	color: var(--gray-200);
`)

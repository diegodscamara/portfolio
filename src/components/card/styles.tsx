import React from 'react'
import styled from 'styled-components'

export const Container = React.memo(styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	isolation: isolate;
	background: var(--gray-50-linear-10);
	backdrop-filter: var(--background-blur);
	border-radius: var(--spacing-s-100);
	box-shadow: var(--shadow-10);
	transition: var(--transition-03);
	position: relative;
	min-height: 580px;

	&:hover {
		background: var(--gray-50-linear-15);
		box-shadow: var(--shadow-20);
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
	color: var(--gray-900);
	font-size: var(--font-s-100);
	font-weight: var(--font-weight-bold);

	&:hover {
		background: var(--primary-variant-color);
		box-shadow: var(--shadow-20);
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

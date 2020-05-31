import React, { FunctionComponent } from "react";
import Header from "@components/header/header.base";
import Nav from "@components/nav/nav.base";
import Footer from "@components/footer/footer.base";
import css from "./layout.module.scss";

const Layout: FunctionComponent = ({ children }) => {
	return (
		<>
			<div className={`fixed ${css.accent}`}></div>
			<aside className={`fixed ${css.sidebar}`}>
				<Nav />
			</aside>
			<div className={css.page}>
				<div className={css.pageContent}>
					<header className={css.header}>
						<Header />
					</header>
					<main>{children}</main>
				</div>
			</div>
			<Footer cls={`fixed ${css.footer}`} />
		</>
	);
};

export default Layout;
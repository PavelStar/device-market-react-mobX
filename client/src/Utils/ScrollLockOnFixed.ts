import { RefObject } from "react";
import PageWidthState from "../store/PageWidthState";

export const scrollLockOnFixed = (scrollType: string, headerRef: RefObject<HTMLDivElement>) => {
	const { scrollYPosition } = PageWidthState;

	if (scrollType === "disabled") {
		const scrollWidthBefore = document.body.clientWidth;
		if (scrollYPosition !== undefined) {
			document.body.style.setProperty("top", `${scrollYPosition * -1}px`);
			document.body.classList.add("body-scroll-disabled");
			const scrollWidthAfter = document.body.clientWidth;
			document.body.style.paddingRight = `${scrollWidthAfter - scrollWidthBefore}px`;
			if (headerRef.current) {
				headerRef.current.style.borderRight = `${scrollWidthAfter - scrollWidthBefore}px solid black`;
			}
		}
	}

	if (scrollType === "enabled") {
		document.body.classList.remove("body-scroll-disabled");
		document.body.style.setProperty("top", "");
		scrollYPosition && window.scrollTo(0, scrollYPosition);
		document.body.style.paddingRight = `${0}px`;
		if (headerRef.current) {
			headerRef.current.style.borderRight = `none`;
		}
	}
};

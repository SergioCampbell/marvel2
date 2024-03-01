import { Link } from "react-router-dom";
import { HeartIcon } from "../../style/HeartIcon";
import { MarvelLogo } from "../../style/Logo";
import { UnselectedHeartIcon } from "../../style/UnselectedHeartIcon";

export default function Navbar({likes}: {likes: number}) {
	return (
		<nav className="navbar">
			<Link to={"/"}>
				<MarvelLogo />
			</Link>
			<div style={{display: "flex", alignItems: "center", gap: 10}}>
				<Link to={"/favorites-list"} style={{display: "flex", alignItems: "center", textDecoration: "none", color: "var(--color_white)"}}>
					{likes !== 0 ? (<><HeartIcon /> <p style={{marginLeft: 10}}>{likes}</p></>) : <UnselectedHeartIcon />}
				</Link>
			</div>
		</nav>
	);
}

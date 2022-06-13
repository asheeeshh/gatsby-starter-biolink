import {
    siGithub,
    siDiscord,
    siBuymeacoffee,
    siMinutemailer,
    siKitsu,
    siDevdotto,
    siNpm,
    siLastdotfm,
    siTwitter,
    siInstagram,
    siReddit,
    siSpotify,
} from "simple-icons/icons";

export default function GetIcon(slug) {
    switch (slug) {
        case "github":
            return siGithub;
        case "discord":
            return siDiscord;
        case "buymeacoffee":
            return siBuymeacoffee;
        case "minutemailer":
            return siMinutemailer;
        case "kitsu":
            return siKitsu;
        case "devdotto":
            return siDevdotto;
        case "npm":
            return siNpm;
        case "lastdotfm":
            return siLastdotfm;
        case "twitter":
            return siTwitter;
        case "instagram":
            return siInstagram;
        case "reddit":
            return siReddit;
        case "spotify":
            return siSpotify;
        default:
            return null;
    }
}

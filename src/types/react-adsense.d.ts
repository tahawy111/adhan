declare module 'react-adsense' {
    interface AdSenseProps {
        client: string;
        slot: string;
        className?: string;
        style?: React.CSSProperties;
        format?: string;
        responsive?: string;
        layout?: string;
        layoutKey?: string;
        timeout?: number;
        onAdLoaded?: () => void;
        onAdFailedToLoad?: () => void;
        onAdOpened?: () => void;
        onAdClosed?: () => void;
        onAdLeftApplication?: () => void;
    }

    export class Google extends React.Component<AdSenseProps> { }
}
import HomeWrapper from "@/components/Layout/Home";

export default function Page() {
    return (
        <HomeWrapper apiUrl={`${process.env.API_URL}`} />
    )
}
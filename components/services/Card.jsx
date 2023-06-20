"use client";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import Image from "next/image";

export default function Example() {
    return (
        <Card className="px-3 py-3">
            <CardHeader
                shadow={false}
                floated={false}
                className=""
            >
                <Image
                    src="/masjid.webp"
                    className="object-covers w-full"
                    alt="Layanan Design Masjid"
                    width={200}
                    quality={100}
                    height={100}
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography
                        color="blue-gray"
                        className="font-medium"
                    >
                        Apple AirPods
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="font-medium"
                    >
                        $95.00
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    With plenty of talk
                    and listen time,
                    voice-activated Siri
                    access, and an
                    available wireless
                    charging case.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

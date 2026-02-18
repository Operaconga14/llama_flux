import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GetStarted() {
    return (
        <div className="px-4 mt-30 pb-20 flex justify-center items-center ">
            <Card className="w-full md:w-4/5 lg:w-2/5 flex flex-col justify-center items-center py-10 px-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10  backdrop-blur-sm">
                <CardContent>
                    <h1 className="text-4xl text-white font-semibold text-center">Ready to start tracking?</h1>
                    <p className="text-gray-500 text-lg text-center mt-3">Join Llama Flux and get access to comprehensive DeFi analytics</p>

                    {/* Button */}
                    <div className="flex justify-center items-center mt-8">
                        <Link href="/signup">
                            <Button size="lg" className="text-gray-900 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                                Get Started for Free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
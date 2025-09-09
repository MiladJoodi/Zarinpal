import Link from "next/link";
import { Button } from "../ui/button";

const ProductsCTA = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary">
                <div className="absolute inset-0 bg-[url('/images/circuit.svg')] opacity-10"></div>
            </div>

            <div className="relative z-10 py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-heavy mb-6">آماده شروع هستید؟</h2>
                    <p className="text-xl mb-8 opacity-90">همین امروز محصولات زرین‌پال را تجربه کنید</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button
                                size="lg"
                                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-4"
                            >
                                شروع رایگان
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 text-lg px-8 py-4"
                            >
                                تماس با فروش
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductsCTA;
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export default function Home_Page() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col justify-around items-center sm:flex-col lg:flex-row h-full">
                <Button
                    className="bg-green-500 text-slate-950 w-96 h-96 text-4xl my-8 lg:my-52"
                    color="secondary"
                    onPress={() => navigate('/register-sale')}
                >
                    Make a Sale
                </Button>
                <Button
                    className="bg-blue-600 text-slate-950 w-96 h-96 text-4xl my-8 lg:my-52"
                    onPress={() => navigate('/sales-report')}
                >
                    Sales Reports
                </Button>
            </div>
        </>
    );
}

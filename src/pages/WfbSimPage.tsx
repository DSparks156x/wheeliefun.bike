import WheelieButtonDemo from '../components/WheelieButtonDemo';

const WfbSimPage = () => {
    return (
        <div className="min-h-screen bg-brand-darker text-white selection:bg-brand selection:text-black overflow-x-hidden flex flex-col items-center justify-center">
            <div className="w-full">
                <WheelieButtonDemo
                    modelPath="/Untitled.glb"
                    modelScale={0.001}
                    modelPosition={[1.9, 0.7, 6.5]}
                    modelRotation={[-1.6, 0, 1.5]}
                />
            </div>
        </div>
    );
};

export default WfbSimPage;

import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-cyan-900 rounded-full animate-spin">
                <div className="flex items-center justify-center ">
                    <div className="w-24 h-24 border-l-4 border-red-900 rounded-full animate-spin">
                        <div className="flex items-center justify-center ">
                            <div className="w-16 h-16 border-b-4 border-green-900 rounded-full animate-spin">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Loading;
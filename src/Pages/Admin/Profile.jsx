import React, { use  } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Save, UserRoundPen, X } from 'lucide-react';

const Profile = () => {
    const { user,
        // loading,
        
    } = use(AuthContext);
    // const [role, isRoleLoading] = useRole();
    

    
    return (
        <div className="min-h-[87vh] content-center p-4">
            <div className="max-w-lg mx-auto card bg-base-100 shadow-xl border border-base-300">

                
                    {/* VIEW CARD */}
                    <div className="card-body items-center text-center pt-8">
                        <div className="avatar mb-4">
                            <div className="w-32 h-32 rounded-lg ring ring-primary ring-offset-2">
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt="profile" className="rounded-lg object-cover" />
                                ) : (
                                    <div className="flex items-center justify-center h-full bg-base-200"><CircleUserRound size={64} /></div>
                                )}
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold">{user?.displayName}</h2>
                        <p className="text-neutral/60">{user?.email}</p>
                        
                    </div>
                
                <div className="p-4 bg-base-200 border-t border-base-300 text-center rounded-b-xl">
                    <span className="font-medium text-sm">Status:</span>{" "}
                    <span className="text-primary text-xs animate-pulse font-bold uppercase  tracking-widest">{"role"}</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
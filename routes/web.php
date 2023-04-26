<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::get('/ourWork/{name?}', function ($name = 'SchoolMissionary') {

    if ($name) {
        $selected_content = $name;
    } else {
        $selected_content = 'SchoolMissionary';
    }

    $content = [
        'SchoolMissionary' => array(
            'title' => 'School Missionary',
            'description' => 'Welcome to the Royal Knights Organisation, where we are dedicated to making a positive impact on the lives of young people through our ministry work at educational institutions. As a team of religious leaders and mentors, our primary goal is to inspire and encourage students to be their best selves, while sharing the good news of the gospel and offering a beacon of hope to those who may be struggling.',
            'sub_content' => [
                [
                    'image' => '/storage/frontEnd/images/School Missionary program/20221005_172917.jpg',
                    'description' => 'We understand the importance of reaching children at an early age, which is why we prioritize visiting primary schools. Through our ministry work, we aim to instill good values and build positive relationships with young children, setting the foundation for a successful future. Our passion is to help these children develop a love for learning and a desire to do good in the world.'
                ],
                [
                    'image' => '/storage/frontEnd/images/School Missionary program/20221002_174656.jpg',
                    'description' => 'We also recognize the challenges that teenagers face during their secondary school years, which is why we are committed to working with them. As mentors and positive role models, we offer guidance and support, helping them navigate the complexities of adolescence. Our focus is on building their self-esteem, developing good decision-making skills, and helping them discover their purpose in life.'
                ], [
                    'image' => '/storage/frontEnd/images/School Missionary program/20230409_123141.jpg',
                    'description' => 'At colleges and universities, we provide a safe and supportive environment for young adults who are transitioning into adulthood. Our ministry work aims to help them navigate the stresses of academic life, providing guidance as they make important decisions about their futures. We offer mentorship, counseling, and a listening ear to help them become the best versions of themselves.'
                ],
            ]
        ),
        'BoystoMen' => array(
            'title' => 'Boys To Men',
            'description' => 'The program is a two-week mentorship initiative designed to offer boys from local communities and primary schools a secluded environment to build their character and life skills. Activities within the program include personal development workshops such as goal-setting, self-esteem building, and coping with stress. Health and wellness workshops aim to encourage the boys prioritize well being.',
            'sub_content' => [
                [
                    'image' => '/storage/frontEnd/images/Boys_to_men/20221217_132006.jpg',
                    'description' => 'Life Skills Training: Providing life skills training such as financial management, time management, and conflict resolution can help prepare the boys for the challenges that they may face in their future.'
                ],
                [
                    'image' => '/storage/frontEnd/images/Boys_to_men/20221220_120025.jpg',
                    'description' => 'Mentorship Sessions: The boys can benefit greatly from one-on-one mentorship sessions with older men who can offer guidance and support. These sessions can provide a safe and supportive space for the boys to talk about their hopes, fears, and dreams.'
                ], [
                    'description' => 'Career Exploration: The boys can benefit from learning about different careers and the steps they need to take to pursue them. This can include having guest speakers from various professions and conducting workshops on resume writing and interview skills.'
                ], [
                    'description' => 'Personal Development Workshops: The boys can benefit from workshops on personal development such as goal-setting, self-esteem building, and coping with stress. These workshops can help them build resilience and confidence, and equip them with tools to handle challenges in their lives.'
                ],
            ]
        ),
        'preaching' => array(
            'title' => 'Preaching',
            'description' => '',
            'sub_content' => [
                [
                    'image' => '/storage/frontEnd/images/Preaching/IMG-20220804-WA0001.jpg',
                    'description' => 'We focus on delivering sound doctrine that is rooted in biblical truth. Our preaching
style is dynamic and engaging, and we strive to connect with our audience on a personal level. We aim
to inspire, encourage, and challenge our listeners to deepen their faith and grow in their relationship
with God.'
                ],

            ]
        ),
        'guidance' => array(
            'title' => 'Academic and career guidance',
            'description' => 'At our guidance and counseling sessions, we provide comprehensive support to individuals seeking guidance and mentorship in various areas of their lives. Our services include leadership guidance, career counseling, career workshops, mentorship in different career paths, and social development guidance. Our team of trained professionals works closely with individuals and groups to understand their unique needs and challenges and develop customized plans to help them achieve their goals. We provide a safe and supportive environment where individuals can explore their passions, build their confidence, and acquire the skills and knowledge necessary to succeed in their personal and professional lives.',
            'sub_content' => [
                [
                    'image' => '/storage/frontEnd/images/Guidance/20221019_152929.jpg',
                ],                [
                    'image' => '/storage/frontEnd/images/Guidance/20221111_155136.jpg',
                ],
            ]
        ),

    ];

    $selected_val = null;

    switch ($selected_content) {
        case 'SchoolMissionary':
            $selected_val = $content['SchoolMissionary'];
            break;
        case 'BoystoMen':
            $selected_val = $content['BoystoMen'];
            break;
        case 'preaching':
            $selected_val = $content['preaching'];
            break;
        case 'guidance':
            $selected_val = $content['guidance'];
            break;
    }


    return Inertia::render('WebPages/ourWork', [
        'content' => $selected_val,
    ]);
});

Route::get('/AboutUs', function () {
    return Inertia::render('WebPages/aboutUs', [
    ]);
});

Route::get('/Gallery', [\App\Http\Controllers\GalleryController::class, 'getAllMedia']);

Route::get('/Connect', function () {
    return Inertia::render('WebPages/connect', [
    ]);
});

Route::get('/Event/{id}', function ($id) {
    $events = [
        [
            'id' => 1,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],
        [
            'id' => 2,
            'title' => 'Connect 2',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],
        [
            'id' => 3,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ], [
            'id' => 4,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],
        [
            'id' => 5,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],
        [
            'id' => 6,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],

    ];
    $events = collect($events);

    $event = $events->each(function ($event) use ($id) {
        if ($event['id'] == $id) {
            return $event;
        }
    });

    if ($event->count() > 0) {
        $event = $event[0];
    } else {
        return \Illuminate\Support\Facades\Redirect::to('/');
    }

    return Inertia::render('WebPages/Event', [
        'event' => $event,
    ]);
});


Route::get('/', function () {
    $events = [
        [
            'id' => 1,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],
        [
            'id' => 2,
            'title' => 'Connect 2',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],
        [
            'id' => 3,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ], [
            'id' => 4,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],
        [
            'id' => 5,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],
        [
            'id' => 6,
            'title' => 'Connect',
            'source' => '/storage/frontEnd/images/MainPageImages/preaching.jpg',
            'date' => '00/00/00',
            'time' => '00:00am',
            'description' => 'description',
        ],

    ];


    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'events' => [
            $events[count($events) - 1],
            $events[count($events) - 2],
            $events[count($events) - 3],
            $events[count($events) - 4],
        ]
    ]);
});

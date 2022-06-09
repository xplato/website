import classNames from 'classnames';
import AnimatedView from '../../components/AnimatedView';
import FeaturedImage from '../../components/shared/FeaturedImage';
import GalleryImage from '../../components/shared/GalleryImage';
import Title from '../../components/Title';

import { textAreaEntityProps } from '../../logic/motion';
import { getEdgePath } from '../../logic/utils';

interface TProps {
	className?: string;
	children?: React.ReactNode;
}

const T = ({ className, children }: TProps) => (
	<p className={classNames('fs-lg', className)}>{children}</p>
);

const Project = () => {
	return (
		<>
			<section className='section xspacing'>
				<div className='x-container flex-c'>
					<AnimatedView {...textAreaEntityProps}>
						<div className='text-container'>
							<Title>Frost</Title>
							<T>
								Although you haven't seen it too clearly yet,
								one of the most distinctive artisic features of
								Crystal is the frosty, blurred backgrounds
								inherent to some of its panels and components.
							</T>
							<T>
								The blurry background is nothing new in modern
								operating systems. MacOS makes excellent use of
								it, and even recent Windows versions have
								inhereted the frosty look. One of the
								distinctions is that CrystalUI (usually) doesn't
								set too many blur colors by default. Instead,
								much of the interface is inherited from the
								background. In the case of the desktop, it is
								inherited from the wallpaper.
							</T>
							<T>
								I'll talk about the search/command palette
								interface later, but notice how the blur of the
								search background inherits the colors of the
								wallpaper directly:
							</T>
						</div>
					</AnimatedView>
				</div>
			</section>

			<section className='section gallery'>
				<div className='x-container flex-c'>
					<div className='grid grid-2 tp-grid-1'>
						<div className='grid-block'>
							<GalleryImage
								index={0}
								src={getEdgePath('crystal/part-1/mtn-hero.jpg')}
								caption='A dark mountain desktop'
							/>
						</div>
						<div className='grid-block'>
							<GalleryImage
								index={1}
								src={getEdgePath('crystal/part-1/search-expose-alt-hero.png')}
								caption='The search interface with a frosted background'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='section p-0'>
				<div className='x-container flex-c'>
					<AnimatedView {...textAreaEntityProps}>
						<div className='text-container'>
							<T>
								In this particular case, the search interface
								might be better without the blurred
								background—nevertheless, it is used here as a
								demonstration of the frosted effect at a large
								scale.
							</T>
							<T>
								This brings me to the second primary
								characteristic...
							</T>

							<div className="mt-4r"></div>
							<Title>Focus</Title>
							<T>
								Context is undeniably useful. Too much of it,
								however, can flow over into distraction. The
								blurred background provides the benefit of
								immediate and relatively distraction-free focus,
								while also providing a hint of context.
							</T>
						</div>
					</AnimatedView>

					<FeaturedImage
						src={getEdgePath('crystal/part-1/search-expose-light.png')}
					/>

					<AnimatedView {...textAreaEntityProps} className='mt-4r'>
						<div className='text-container'>
							<T>
								Focus will become more relevant when I go more
								into the design of the OS, but right now, the
								primary thing to note is that the blur provides
								a little focus, as long as it's applied
								correctly.
							</T>
							<T>
								Here, it's being used to add a privacy-enhancing
								blur to the lock screen.
							</T>
							<T className='mb-0'>
								This is a good time to note: CrystalOS is still
								under development. The animations are smooth on
								my computer when I'm not screen recording, but
								once I start recording, the frame rate drops
								substantially. As such, when you see a laggy GIF
								like you do below, you'll pretend that the
								animations are as smooth as butter, like they
								are for me.
							</T>
						</div>
					</AnimatedView>

					<FeaturedImage
						src={getEdgePath('crystal/part-1/lock-interaction.gif')}
						caption='Locking the OS adds a nice background blur'
					/>

					<AnimatedView {...textAreaEntityProps} className='mt-4r'>
						<div className='text-container'>
							<p className='fs-lg opacity-05 fw-600'>
								Functional Implications
							</p>

							<T>
								Focus also applies functionally as well. The
								keyboard is a vital tool—and the fact that it's
								available at all times when using a desktop or
								laptop computer means we need to utilize it.
							</T>

							<T>
								When I introduce the Menu component below, note
								that when you first open the menu, focus is
								shifted to where the background is—even as your
								mouse hovers over the items. This combination
								and close synchronization of the interface and
								keyboard gives CrystalOS some interesting
								capabilities. These will be discussed in more
								detail in later chapters.
							</T>

							<div className='mt-4r'></div>
							<Title>Overflow</Title>

							<T>
								In the way that Focus helps to eliminate
								distraction, the characteristic overflow of
								Cystal helps to bring your attention to certain
								areas of the interface.
							</T>
							<T>
								Most importantly, it directs your attention in a
								smooth, natural way that you can easily follow.
							</T>
							<T>
								This attention-grabbing feature is functionally
								a result of two things:
							</T>
							<ul>
								<li>
									<T>
										the background literally overflowing out
										of its container (in most places); and
									</T>
								</li>
								<li>
									<T>
										the background being disconnected from
										any given item.
									</T>
								</li>
							</ul>

							<div className='w-100p grid grid-2 ml-grid-1'>
								<div className='grid-block justify-s'>
									<GalleryImage
										index={0}
										src={getEdgePath('crystal/part-1/os-menu-light.png')}
										caption='The hovering background, shown as a gentle white in light mode.'
									/>
								</div>
								<div className='grid-block justify-s'>
									<GalleryImage
										index={1}
										src={getEdgePath('crystal/part-1/os-menu-dark.png')}
										caption='The hovering background, shown as a more aggressive blue in dark mode.'
									/>
								</div>
							</div>

							<div className='mt-4r'></div>

							<T>
								These images introduce a few other
								characteristics: depth and color.
							</T>

							<div className='mt-4r'></div>
							<Title>Depth</Title>

							<T>
								One of the goals with CrystalUI is to feel
								relatively natural. Now, it's arguable how close
								"futuristic" can come to "natural," but it's
								undeniable that depth in any interface is more
								"natural" than otherwise.
							</T>
							<T>
								Unlike flat interfaces, Crystal intends to stand
								out in highly precise areas. One of the best and
								most natural ways to do that is with depth,
								introduced via dynamic backgrounds and shadows.
							</T>

							<FeaturedImage
								src={getEdgePath('crystal/part-1/app-item-closeup.png')}
							/>
							<FeaturedImage
								src={getEdgePath('crystal/part-1/app-item-closeup-left.png')}
								mods='enlarge'
							/>

							<div className='mt-4r'></div>
							<Title>Color</Title>

							<T>
								Akin to real-life crystals, CrystalUI intends to
								inherit its visual characteristics, in terms of
								color, from what it is currently doing.
							</T>
							<T>
								Most prominently, the "atomic" components of the
								interface—Menus, Buttons, and so on—avoid using
								any bold colors. The Dropdown menu, as displayed
								above, uses shades of white on light mode. In
								the dark, it will eventually inherit its primary
								color from the background as well. For now, I
								defaulted to blue.
							</T>

							<div className='w-100p grid grid-2 ml-grid-1'>
								<div className='grid-block justify-s'>
									<GalleryImage
										index={0}
										src={getEdgePath('crystal/part-1/wifi-menu-light.png')}
										caption='The WiFi menu showing an inherited background color (Light)'
									/>
								</div>
								<div className='grid-block justify-s'>
									<GalleryImage
										index={1}
										src={getEdgePath('crystal/part-1/wifi-menu-dark.png')}
										caption='The WiFi menu showing an inherited background color (Dark)'
									/>
								</div>
							</div>

							<div className='mt-4r'></div>
							<Title>Animation</Title>

							<T>
								Animation, movement, and fluidity are some of
								the most important aspects of CrystalUI. The
								interface is designed to react to its
								environment.
							</T>

							<T>
								Fluidity is important at both a small and grand
								scale. It's quite important that your users can
								fluidly move between tasks, just like it's
								important that dropdown menus open naturally
								instead of all at once. [1]
							</T>

							<T>
								CrystalUI employs various stages of animations
								for most components. The Menu component, for
								instance, animates its height and each item
								sequentially within it:
							</T>

							<div className='w-100p grid grid-2 ml-grid-1 mb-4r'>
								<div className='grid-block justify-s'>
									<GalleryImage
										index={1}
										src={getEdgePath(
											'wifi-menu-interaction-light.gif'
										)}
										caption='The WiFi menu entrance animation (Light)'
									/>
								</div>
								<div className='grid-block justify-s'>
									<GalleryImage
										index={1}
										src={getEdgePath(
											'wifi-menu-interaction-dark.gif'
										)}
										caption='The WiFi menu entrance animation (Dark)'
									/>
								</div>
							</div>

							<T>
								And, just like fluidity, animations must
								translate nicely to a much larger scale:
							</T>

							</div>
					</AnimatedView>

					<FeaturedImage
						src={getEdgePath('crystal/part-1/search-entrance-animation-light.gif')}
						caption='Opening the Command Palette (Light)'
					/>

					<AnimatedView {...textAreaEntityProps} className='mt-4r'>
						<div className='text-container'>

							<div className='mt-4r'></div>
							<Title>Movement {'&'} Fluidity</Title>
							<T>
								Movement {'&'} Fluidity is something I've been
								saving until the end. It's one of CrystalUI's
								most distinctive features.
							</T>
							<T>Described most simply, the UI moves with you:</T>

							<FeaturedImage
								src={getEdgePath(
									'wifi-menu-microinteraction.gif'
								)}
							/>

							<T className='mt-4r'>
								Fluidity is also important within the context of
								multi-component animations. The widget animation
								is perhaps one of the best "flow-like"
								animations I can demonstrate at this point in
								time (again, forgive the frame rate):
							</T>
						</div>
					</AnimatedView>

					<FeaturedImage
						src={getEdgePath('crystal/part-1/horizontal-widget-animation.gif')}
						caption='Widgets animating into a horizontal layout'
					/>

					<AnimatedView {...textAreaEntityProps}>
						<div className='text-container'>
							<div className='mt-4r'></div>
							<Title>Adaptation</Title>

							<T>
								Similar to how the colors adapt to their
								background, another distinctive characteristic
								of CrystalUI is the ability to adapt to certain
								conditions on-demand.
							</T>

							<T>
								What you've seen thus far, all the imagery and
								videography, it's all been built with real web
								code. The code itself is closed-source, as I
								plan to use many parts of it in a real-life
								projet. Regardless, my point is that I'm a
								programmer by nature, almost. In practice, this
								means that CrystalUI has both aesthetic
								characteristics and functional ones.
							</T>

							<T>
								So, when I say that components in CrystalUI are
								"adaptable," I mean that literally.
							</T>

							<T>
								I've always had a very modular perspective to
								life and programming. In practice, I tend to
								write smaller, more versatile things. In
								CrystalUI, we see this with the adaptability of
								components. It may not be as clear now, but in
								later parts of this series, you'll see how
								adaptability plays a vital role in the efficacy
								of CrystalUI as a whole.
							</T>

							<T>
								For demonstration, we can see this with a
								vertical list of widgets instead:
							</T>
						</div>
					</AnimatedView>

					<FeaturedImage
						src={getEdgePath('crystal/part-1/vertical-widget-animation.gif')}
						caption='Widgets animating into a vertical layout'
					/>

					<AnimatedView {...textAreaEntityProps} className='mt-4r'>
						<div className='text-container'>
							<T>
								Even further, we can see this when I create what
								I call an "Exposé" with the calendar widget:
							</T>

							<FeaturedImage
								src={getEdgePath('crystal/part-1/calendar-expose-light.png')}
								caption='Command palette calendar widget exposé (Light)'
							/>
							<FeaturedImage
								src={getEdgePath('crystal/part-1/calendar-expose-dark.png')}
								caption='Command palette calendar widget exposé (Dark)'
							/>

							<div className='mt-4r'></div>
							<Title>Closing remarks</Title>

							<T>
								I've only touched the tip of what I've got in
								store for Crystal. Today concludes most of what
								CrystalUI is or will become.
							</T>

							<T>
								Next up, we'll talk about the philosophy behind
								CrystalOS, and some of its implementation.
							</T>

							<T>
								In the meantime, share this if you found it
								interesting.
							</T>

							<T>Thanks for reading.</T>

							<div className='mt-4r'></div>

							<h3>Extra shots</h3>
						</div>
					</AnimatedView>

					<FeaturedImage
						src={getEdgePath('crystal/part-1/desktop-sunset-wallpaper.jpg')}
						caption='CrystalOS Desktop with the Sunset wallpaper'
					/>

					<FeaturedImage
						src={getEdgePath(
							'desktop-widgets-vertical-expanded-dark.jpg'
						)}
						caption='Widgets expanded vertically (Dark)'
					/>

					<FeaturedImage
						src={getEdgePath('crystal/part-1/lock-screen-dark.png')}
						caption='Lock Screen (Dark)'
					/>

					<AnimatedView {...textAreaEntityProps} className='mt-4r'>
						<div className='text-container'></div>
					</AnimatedView>
				</div>
			</section>
		</>
	);
};

export default Project;

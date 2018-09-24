require 'calabash-android/calabash_steps'

Then /^I press podcasts results list item number (\d+)$/ do |index|
	tap_when_element_exists("android.widget.GridView index:0 android.widget.TextView index:#{index.to_i-1}")
end

Then /^I press podcasts list item number (\d+)$/ do |index|
	tap_when_element_exists("android.widget.GridView index:0 android.widget.FrameLayout index:#{index.to_i-1}")
end

Then /^I long press podcasts list item number (\d+)$/ do |index|
	long_press_when_element_exists("android.widget.GridView index:0 android.widget.FrameLayout index:#{index.to_i-1}")
end

Then /^I press episodes list item number (\d+)$/ do |index|
	tap_when_element_exists("android.support.v7.widget.RecyclerView index:0 android.widget.TextView index:#{index.to_i-1}")
end

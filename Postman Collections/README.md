Instructions for backing up Postman collections GitHub:

<h2 id="backing-up-collections-to-github"><a class="anchor" node="[object Object]" href="/docs/integrations/available-integrations/github/#backing-up-collections-to-github">Backing up collections to GitHub</a></h2>
<p>You can back up a Postman Collection to a GitHub repository. After you create the integration, any new changes to the collection in Postman will also appear in the GitHub repository.</p>
<ol class="">
<li class="ListItem_listItem__HtAAl">
<p>From the <strong><a class="" rel="nofollow" node="[object Object]" href="https://go.postman.co/home">Home</a></strong> page select <strong><a class="" rel="nofollow" node="[object Object]" href="https://go.postman.co/integrations">Integrations</a></strong>.</p>
 <img alt="Home page and integrations" loading="lazy" width="390" height="100" decoding="async" data-nimg="1" class="Image_image__uUrmD" style="color:transparent" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10.jpg"/>
</li>
<li class="ListItem_listItem__HtAAl">
<p>Search and select <strong>GitHub</strong>.</p>
 <img alt="GitHub integration" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="Image_image__uUrmD Image_fullWidth__1DuRN" style="color:transparent" src="https://assets.postman.com/postman-docs/v10/integrations-github-v10.jpg"/>
</li>
<li class="ListItem_listItem__HtAAl">
<p>Next to <strong>Backup a collection</strong>, select <strong>Add Integration</strong>.</p>
</li>
<li class="ListItem_listItem__HtAAl">
<p>Enter your GitHub <strong>Personal Access Token</strong> and select <strong>Authenticate and Proceed</strong>.</p>
 <img alt="GitHub integration" loading="lazy" width="515" height="100" decoding="async" data-nimg="1" class="Image_image__uUrmD" style="color:transparent" src="https://assets.postman.com/postman-docs/v10/integrations-github-authenticate-v10.jpg"/>
</li>
<li class="ListItem_listItem__HtAAl">
<p>After Postman verifies the token, you can configure the integration:</p>
<ul class="">
<li class="ListItem_listItem__HtAAl">Give the integration a nickname.</li>
<li class="ListItem_listItem__HtAAl">Select the workspace with the collection you want to back up.</li>
<li class="ListItem_listItem__HtAAl">Select a collection to back up.</li>
<li class="ListItem_listItem__HtAAl">Select the GitHub repository where you want to back up the collection.</li>
<li class="ListItem_listItem__HtAAl">Enter the directory where you want to push the collection. If the directory doesn&#x27;t exist, Postman will create it for you. If you don&#x27;t specify a directory, Postman will create a <code>Postman collections</code> directory.</li>
<li class="ListItem_listItem__HtAAl">Enter the file name of the collection in the repository.</li>
<li class="ListItem_listItem__HtAAl">Select the branch where you want to push the collection. The branch must already exist in your repository. If you don&#x27;t specify a branch, Postman will push the collection to the default branch of the repository.</li>
</ul>
<img alt="Configure GitHub integration" loading="lazy" width="507" height="100" decoding="async" data-nimg="1" class="Image_image__uUrmD" style="color:transparent" src="https://assets.postman.com/postman-docs/v10/integrations-github-add-v10.jpg"/>
</li>
<li class="ListItem_listItem__HtAAl">
<p>To finish setting up the integration, select <strong>Add Integration</strong>.</p>
</li>
</ol>
<p>Postman often checks your collection for changes. If Postman identifies changes when it checks your collection, the changes automatically commit to your repository in JSON format. Go to your GitHub repository to view your collections.</p>
<img alt="Collection backup in GitHub" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="Image_image__uUrmD Image_fullWidth__1DuRN" style="color:transparent" src="https://assets.postman.com/postman-docs/v10/integrations-github-repo-v10.jpg"/>
<blockquote class="Blockquote_blockquote__f1RMG">
<p><strong>You can view your configured integrations on the <a class="" rel="nofollow" node="[object Object]" href="https://go.postman.co/integrations/browse">Browse Integrations</a> page.</strong> You can also view integrations that have been configured for a collection by opening the collection and selecting the information icon <img alt="Information icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" class="Image_icon__iAvcZ" style="color:transparent" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon"/> in the right sidebar. Learn more about <a href="/docs/integrations/intro-integrations/#view-or-edit-integrations" class="" node="[object Object]">viewing or editing integrations</a>.</p>
</blockquote>
<h2 id="backing-up-collections-to-github-enterprise-server"><a class="anchor" node="[object Object]" href="/docs/integrations/available-integrations/github/#backing-up-collections-to-github-enterprise-server">Backing up collections to GitHub Enterprise Server</a></h2>
<p>You can back up a Postman Collection to a GitHub Enterprise Server repository on a custom domain. Follow the same step as <a class="" node="[object Object]" href="/docs/integrations/available-integrations/github/#backing-up-collections-to-github">backing up collections to GitHub</a> with the following differences.</p>
<ol class="">
<li class="ListItem_listItem__HtAAl">
<p>After searching for the GitHub integration in Postman, select <strong>Add Integration</strong> next to <strong>Backup a collection (custom domain)</strong>.</p>
</li>
<li class="ListItem_listItem__HtAAl">
<p>Along with your personal access token, enter the custom domain of your enterprise server (for example, <code>https://my-git-server.example.com</code>). Then select <strong>Authenticate and Proceed</strong>.</p>
<img alt="GitHub custom domain" loading="lazy" width="515" height="100" decoding="async" data-nimg="1" class="Image_image__uUrmD" style="color:transparent" src="https://assets.postman.com/postman-docs/v10/integrations-github-custom-domain-v10.jpg"/>
</li>
<li class="ListItem_listItem__HtAAl">
<p>Configure the integration with your collection, repository, directory, file name, and branch.</p>
</li>
<li class="ListItem_listItem__HtAAl">
<p>To finish setting up the integration, select <strong>Add Integration</strong>.</p>
</li>
</ol>
<p>Postman often checks your collection for changes. If Postman identifies changes when it checks your collection, the changes automatically commit to your repository in JSON format. Go to your GitHub repository to view your collections.</p>
<h3 id="static-ip-support"><a class="anchor" node="[object Object]" href="/docs/integrations/available-integrations/github/#static-ip-support">Static IP support</a></h3>
<p>If your network is behind a firewall, you must allowlist a static IP address to enable collection backups to GitHub Enterprise Server on a custom domain.</p>
<p>Contact your IT team to allowlist the following static IP in your firewall:</p>
<ul class="">
<li class="ListItem_listItem__HtAAl">US East: <code>3.212.102.200</code></li>
</ul>
<p>Once you allowlist this IP address, the collection backup integration will be able to connect to your private network.</p>
<blockquote class="Blockquote_blockquote__f1RMG">
<p>The <strong>Backup a collection (custom domain)</strong> integration requires the ability to reach the static IP address <code>3.212.102.200</code> from the network where your GitHub Enterprise Server instance is hosted. If your server instance is in a virtual private cloud (VPC), you may need to change the VPC&#x27;s network access control list or rules.</p>
</blockquote>
<h2 id="troubleshooting-the-github-integration"><a class="anchor" node="[object Object]" href="/docs/integrations/available-integrations/github/#troubleshooting-the-github-integration">Troubleshooting the GitHub integration</a></h2>
<p>If your GitHub integration has issues or your data isn&#x27;t pushed to GitHub, make sure you&#x27;ve met the following requirements:</p>
<ul class="">
<li class="ListItem_listItem__HtAAl">
<p>You added the GitHub integration in the same workspace as the content you want to push to the GitHub repository.</p>
</li>
<li class="ListItem_listItem__HtAAl">
<p>You selected the correct GitHub integration in Postman. For example, if you use <a class="" node="[object Object]" href="/docs/integrations/available-integrations/github/#backing-up-collections-to-github-enterprise-server">GitHub Enterprise Server on a custom domain</a>, make sure you selected the <strong>Backup a collection (custom domain)</strong> integration.</p>
</li>
<li class="ListItem_listItem__HtAAl">
<p>You initialized your GitHub repository with a <code>README.md</code> file. When creating a new repository, you can select the <strong>Add a README file</strong> checkbox.</p>
</li>
<li class="ListItem_listItem__HtAAl">
<p>You selected the correct permissions when creating your GitHub <a class="" node="[object Object]" href="/docs/integrations/available-integrations/github/#generating-a-github-personal-access-token">personal access token</a>:</p>
<ul class="">
<li class="ListItem_listItem__HtAAl"><strong>Classic token</strong> - Make sure to select the <code>repo</code> and <code>user</code> scopes.</li>
<li class="ListItem_listItem__HtAAl"><strong>Fine-grained token</strong> - Make sure the token has access to the repository you want to back up to and has the following Repository permissions: <code>Contents (Read and write)</code> and <code>Metadata (Read-only)</code>.</li>
</ul>
</li>
<li class="ListItem_listItem__HtAAl">
<p>The branch you specified when setting up the integration already exists on GitHub. Postman won&#x27;t create the branch if it doesn&#x27;t already exist.</p>
</li>
<li class="ListItem_listItem__HtAAl">
<p>You have permissions to push to the branch.</p>
</li>
<li class="ListItem_listItem__HtAAl">
<p>If your instance of GitHub Enterprise Server is on-premises or self-hosted, check with your IT team for <a class="" node="[object Object]" href="/docs/integrations/available-integrations/github/#static-ip-support">firewall requirements</a>.</p>
</li>
</ul>


ref: https://learning.postman.com/docs/integrations/available-integrations/github/#backing-up-collections-to-github